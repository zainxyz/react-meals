import ArrowRightIcon from 'react-icons/lib/fa/arrow-circle-right';
import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o';
import Loading from 'react-loading';
import Modal from 'react-modal';
import React, { Component } from 'react';
import shortid from 'shortid';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FoodList from './FoodList';
import ShoppingList from './ShoppingList';
import { MEAL_ORDER } from '../constants';
import { addRecipe, removeRecipe } from '../actions';
import { capitalize } from '../utils/helpers';
import { fetchRecipes } from '../utils/api';
import { normalizedCalendar } from '../selectors';

class App extends Component {
  state = {
    day: null,
    food: null,
    foodModalOpen: false,
    ingredientsModalOpen: false,
    loadingFood: false,
    meal: null,
  };

  openFoodModal = ({ meal, day }) => {
    this.setState(() => ({
      foodModalOpen: true,
      meal,
      day,
    }));
  };

  closeFoodModal = () => {
    this.setState(() => ({
      foodModalOpen: false,
      meal: null,
      day: null,
      food: null,
    }));
  };

  searchFood = e => {
    if (!this.input.value) {
      return;
    }

    e.preventDefault();

    this.setState(() => ({ loadingFood: true }));

    fetchRecipes(this.input.value).then(food =>
      this.setState(() => ({ food, loadingFood: false }))
    );
  };

  openIngredientsModal = () => this.setState(() => ({ ingredientsModalOpen: true }));

  closeIngredientsModal = () => this.setState(() => ({ ingredientsModalOpen: false }));

  generateShoppingList = () =>
    this.props.calendar
      .reduce((result, { meals }) => {
        const { breakfast, lunch, dinner } = meals;

        breakfast && result.push(breakfast);
        lunch && result.push(lunch);
        dinner && result.push(dinner);
        return result;
      }, [])
      .reduce((ingredients, { ingredientLines }) => ingredients.concat(ingredientLines), []);

  render() {
    const { foodModalOpen, loadingFood, food, ingredientsModalOpen } = this.state;
    const { calendar, addRecipe, removeRecipe } = this.props;

    return (
      <div className="container">
        <div className="nav">
          <h1 className="header">React Meals</h1>
          <button className="shopping-list" onClick={this.openIngredientsModal}>
            Shopping List
          </button>
        </div>

        <ul className="meal-types">
          {MEAL_ORDER.map(mealType =>
            <li key={shortid.generate()} className="subheader">
              {capitalize(mealType)}
            </li>
          )}
        </ul>

        <div className="calendar">
          <div className="days">
            {calendar.map(({ day }) =>
              <h3 key={shortid.generate()} className="subheader">
                {capitalize(day)}
              </h3>
            )}
          </div>
          <div className="icon-grid">
            {calendar.map(({ day, meals }) =>
              <ul key={shortid.generate()}>
                {MEAL_ORDER.map(meal =>
                  <li key={shortid.generate()} className="meal">
                    {meals[meal]
                      ? <div className="food-item">
                          <img src={meals[meal].image} alt={meals[meal].label} />
                          <button onClick={() => removeRecipe({ meal, day })}>Clear</button>
                        </div>
                      : <button
                          className="icon-btn"
                          onClick={() => this.openFoodModal({ meal, day })}
                        >
                          <CalendarIcon size={30} />
                        </button>}
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>

        <Modal
          className="modal"
          contentLabel="Modal"
          isOpen={foodModalOpen}
          onRequestClose={this.closeFoodModal}
          overlayClassName="overlay"
        >
          <div>
            {loadingFood === true
              ? <Loading delay={200} type="spin" color="#222" className="loading" />
              : <div className="search-container">
                  <h3 className="subheader">
                    Find a meal for {capitalize(this.state.day)} {this.state.meal}.
                  </h3>
                  <div className="search">
                    <input
                      className="food-input"
                      type="text"
                      placeholder="Search Foods"
                      ref={input => (this.input = input)}
                    />
                    <button className="icon-btn" onClick={this.searchFood}>
                      <ArrowRightIcon size={30} />
                    </button>
                  </div>
                  {food !== null &&
                    <FoodList
                      food={food}
                      onSelect={recipe => {
                        addRecipe({ recipe, day: this.state.day, meal: this.state.meal });
                        this.closeFoodModal();
                      }}
                    />}
                </div>}
          </div>
        </Modal>

        <Modal
          className="modal"
          contentLabel="Modal"
          isOpen={ingredientsModalOpen}
          onRequestClose={this.closeIngredientsModal}
          overlayClassName="overlay"
        >
          {ingredientsModalOpen && <ShoppingList list={this.generateShoppingList()} />}
        </Modal>
      </div>
    );
  }
}

export default connect(
  createStructuredSelector({
    calendar: normalizedCalendar,
  }),
  {
    addRecipe,
    removeRecipe,
  }
)(App);
