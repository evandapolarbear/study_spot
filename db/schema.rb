# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161222020358) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ar_internal_metadata", primary_key: "key", force: :cascade do |t|
    t.string   "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "favorites", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "spot_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "favorites", ["spot_id"], name: "index_favorites_on_spot_id", using: :btree
  add_index "favorites", ["user_id", "spot_id"], name: "index_favorites_on_user_id_and_spot_id", unique: true, using: :btree
  add_index "favorites", ["user_id"], name: "index_favorites_on_user_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.string   "body",       default: "", null: false
    t.integer  "rating",                  null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.integer  "spot_id"
  end

  add_index "reviews", ["spot_id"], name: "index_reviews_on_spot_id", using: :btree

  create_table "spots", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.float    "lat"
    t.float    "lng"
    t.string   "network_name", null: false
    t.string   "password"
    t.boolean  "coffee",       null: false
    t.boolean  "plugs",        null: false
    t.string   "bar"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
