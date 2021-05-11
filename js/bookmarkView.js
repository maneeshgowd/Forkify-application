import View from "./view.js";
import previewView from "./previewView.js";
import icons from "url:../img/icons.svg";

class BookmarkView extends View {
  _parentElement = document.querySelector(".bookmarks__list");
  _errorMsg = "No bookmarks yet!";
  _message = "";

  addHandlerRender(handler){
      window.addEventListener('load',handler);
  }

  _generateMarkup() {
    return this._data.map((result) => previewView.render(result, false)).join("");
  }
}

export default new BookmarkView();
