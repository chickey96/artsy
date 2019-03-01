class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title, null: false
      t.integer :artist_id, null: false 
      t.float :price, null: false 
      t.string :media_type, null: false 
      t.timestamps
    end
    add_index :products, :title
    add_index :products, :artist_id 
  end
end
