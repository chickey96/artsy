class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :user_id, null: false 
      t.integer :product_id, null: false 
      t.timestamps
    end
    add_index :comments, :user_id 
    add_index :comments, :product_id 
  end
end
