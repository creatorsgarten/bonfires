require 'toml-rb'

s = File.read('./event.toml')
data = TomlRB.parse(s, symbolize_keys: true)

event = data[:event]
p event[:name]
p event[:type]

dates = data[:when]

def merge_datetime(date, time)
  DateTime.new(date.year, date.month, date.day, time.hour, time.min, time.sec, time.zone)
end

def get_dates(dates)
  prefix = dates[:date]

  return prefix[:start], prefix[:end] unless prefix

  [
    merge_datetime(prefix, dates[:start].to_time),
    merge_datetime(prefix, dates[:end].to_time)
  ]
end

p get_dates(dates)
