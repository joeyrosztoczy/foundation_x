defmodule FoundationX.PageController do
  use FoundationX.Web, :controller

  def application(conn, _params) do
    render conn, "application.html"
  end

  def index(conn, _params) do
    render conn, "index.html"
  end
end
