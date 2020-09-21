class Api::ItemsController < ApplicationController
  def index
    render json: Item.all
  end

  #not need because api does return form anymore.
  # def new

  # end
  def create

    #santiazing is more crucial
    item = Item.new(item_params)
    if (item.save)
      render json: item #this will have the id
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
      # render json: { error: "unable to save"  },
    end
  end

  def update
    item = Item.find(params[:id])
    item.update(complete: !item.complete)
    render json: item
  end

  def destroy
    item = Item.find(params[:id]).destroy
    # nice to send back item becase this might give them the option
    # for a undo or some other feature
    render json: { message: "Item deleted", item: item }
  end

  private

  def item_params
    params.require(:item).permit(:name, :complete)
  end
end
