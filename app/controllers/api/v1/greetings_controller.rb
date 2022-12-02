class Api::V1::GreetingsController < ApplicationController
  # GET /greetings or /greetings.json
  def index
    @greetings = Greeting.order(Arel.sql('RANDOM()')).first
    render json: @greetings
  end
end
