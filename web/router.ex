defmodule FoundationX.Router do
  use FoundationX.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", FoundationX do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/american_committee", PageController, :american_committee
    get "/application", PageController, :application
    get "/hungarian_committee", PageController, :hungarian_committee
  end

  # Other scopes may use custom stacks.
  # scope "/api", FoundationX do
  #   pipe_through :api
  # end
end
