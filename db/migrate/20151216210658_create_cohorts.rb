class CreateCohorts < ActiveRecord::Migration
  def change
    create_table :cohorts do |t|
      t.string :cohort_name
      t.date :start_date
      t.date :end_date
      t.string :subject
      t.boolean :full_time
      t.integer :max_absences, default: 4
      t.references :producer
    end
  end
end
