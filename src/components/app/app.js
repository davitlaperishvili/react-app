import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          label: "I am going to learn React",
          important: true,
          liked: false,
          id: "1"
        },
        { label: "Thats so cool", important: false, liked: false, id: "2" },
        { label: "I need a break...", important: false, liked: false, id: "3" }
      ],
      term: "",
      filter: "all"
    };
    this.maxId = 4;
    this.deleteItem = id => {
      this.setState(({ data }) => {
        const index = data.findIndex(elem => elem.id === id);
        const newArray = [...data.slice(0, index), ...data.slice(index + 1)];
        return {
          data: newArray
        };
      });
    };
    this.addItem = body => {
      const newItem = {
        label: body,
        important: false,
        id: this.maxId++
      };
      this.setState(({ data }) => {
        const newArr = [...data, newItem];
        return {
          data: newArr
        };
      });
    };
    this.onToggleImportant = id => {
      this.setState(({ data }) => {
        const index = data.findIndex(elem => elem.id === id);
        const old = data[index];
        const newItem = { ...old, important: !old.important };
        const newArr = [
          ...data.slice(0, index),
          newItem,
          ...data.slice(index + 1)
        ];
        return {
          data: newArr
        };
      });
    };
    this.onToggleLike = id => {
      this.setState(({ data }) => {
        const index = data.findIndex(elem => elem.id === id);
        const old = data[index];
        const newItem = { ...old, liked: !old.liked };
        const newArr = [
          ...data.slice(0, index),
          newItem,
          ...data.slice(index + 1)
        ];
        return {
          data: newArr
        };
      });
    };
    this.onUpdateSearch = term => {
      this.setState({ term });
    };
    this.onFilterSelect = filter => {
      this.setState({ filter });
    };
  }
  searchPost = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.label.indexOf(term) > -1;
    });
  };
  filterPost = (items, filter) => {
    if (filter === "liked") {
      return items.filter(item => item.liked);
    } else {
      return items;
    }
  };
  render() {
    const { data, term, filter } = this.state;
    const liked = data.filter(item => item.liked).length;
    const allPosts = data.length;

    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
    return (
      <div className="app">
        <AppHeader liked={liked} allPosts={allPosts} />
        <div className="search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLike={this.onToggleLike}
        />
        <PostAddForm onAdd={this.addItem} />
      </div>
    );
  }
}
