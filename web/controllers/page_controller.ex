defmodule FoundationX.PageController do
  use FoundationX.Web, :controller

  def american_committee(conn, _params) do
    render conn, "american_committee.html"
  end

  def application(conn, _params) do
    render conn, "application.html"
  end

  def index(conn, _params) do
    render conn, "index.html"
  end

  def hungarian_committee(conn, _params) do
    render conn, "hungarian_committee.html"
  end
end
