// require hogan
var hogan = require("hogan.js");

// construct template string
var template = '<form id="ucsf_shuttle_trip_form" action="/shuttle/planner/">';
    template += '<h2>Trip Planner</h2>';
    template += '<select name="begin" id="ucsf_shuttle_starting_from">';
    template += '{{#stops}}';
    template += '<option value="{{#id}}{{agencyId}}_{{id}}{{/id}}">From {{stopName}}</option>';
    template += '{{/stops}}';
    template += '</select>';
    template += '{{^stops}}';
    template += '<p>Content could not be loaded.</p>';
    template += '{{/stops}}';
    template += '<button type="button" id="reverse_trip" class="reverse_trip">&uarr;&darr;</button>';
    template += '<select name="end" id="ucsf_shuttle_ending_at">';
    template += '{{#stops}}';
    template += '<option value="{{#id}}{{agencyId}}_{{id}}{{/id}}">To {{stopName}}</option>';
    template += '{{/stops}}';
    template += '</select>';
    template += '{{^stops}}';
    template += '<p>Content could not be loaded.</p>';
    template += '{{/stops}}';
    template += '<fieldset disabled name="datetime">';
    template += '<legend>';
    template += '<select class="compact" name="when" onchange="form.datetime.disabled = value==\'now\'">';
    template += '<option value="now">Leave now</option>';
    template += '<option value="depart">Depart at</option>';
    template += '<option value="arrive">Arrive by</option>';
    template += '</select>';
    template += '</legend>';
    template += '<select class="compact" name="time">';
    template += '<option value="6:00am">6:00am</option>';
    template += '<option value="6:15am">6:15am</option>';
    template += '<option value="6:30am">6:30am</option>';
    template += '<option value="6:45am">6:45am</option>';
    template += '<option value="7:00am">7:00am</option>';
    template += '<option value="7:15am">7:15am</option>';
    template += '<option value="7:30am">7:30am</option>';
    template += '<option value="7:45am">7:45am</option>';
    template += '<option value="8:00am">8:00am</option>';
    template += '<option value="8:15am">8:15am</option>';
    template += '<option value="8:30am">8:30am</option>';
    template += '<option value="8:45am">8:45am</option>';
    template += '<option value="9:00am">9:00am</option>';
    template += '<option value="9:15am">9:15am</option>';
    template += '<option value="9:30am">9:30am</option>';
    template += '<option value="9:45am">9:45am</option>';
    template += '<option value="10:00am">10:00am</option>';
    template += '<option value="10:15am">10:15am</option>';
    template += '<option value="10:30am">10:30am</option>';
    template += '<option value="10:45am">10:45am</option>';
    template += '<option value="11:00am">11:00am</option>';
    template += '<option value="11:15am">11:15am</option>';
    template += '<option value="11:30am">11:30am</option>';
    template += '<option value="11:45am">11:45am</option>';
    template += '<option value="12:00pm">12:00pm</option>';
    template += '<option value="12:15pm">12:15pm</option>';
    template += '<option value="12:30pm">12:30pm</option>';
    template += '<option value="12:45pm">12:45pm</option>';
    template += '<option value="1:00pm">1:00pm</option>';
    template += '<option value="1:15pm">1:15pm</option>';
    template += '<option value="1:30pm">1:30pm</option>';
    template += '<option value="1:45pm">1:45pm</option>';
    template += '<option value="2:00pm">2:00pm</option>';
    template += '<option value="2:15pm">2:15pm</option>';
    template += '<option value="2:30pm">2:30pm</option>';
    template += '<option value="2:45pm">2:45pm</option>';
    template += '<option value="3:00pm">3:00pm</option>';
    template += '<option value="3:15pm">3:15pm</option>';
    template += '<option value="3:30pm">3:30pm</option>';
    template += '<option value="3:45pm">3:45pm</option>';
    template += '<option value="4:00pm">4:00pm</option>';
    template += '<option value="4:15pm">4:15pm</option>';
    template += '<option value="4:30pm">4:30pm</option>';
    template += '<option value="4:45pm">4:45pm</option>';
    template += '<option value="5:00pm">5:00pm</option>';
    template += '<option value="5:15pm">5:15pm</option>';
    template += '<option value="5:30pm">5:30pm</option>';
    template += '<option value="5:45pm">5:45pm</option>';
    template += '<option value="6:00pm">6:00pm</option>';
    template += '<option value="6:15pm">6:15pm</option>';
    template += '<option value="6:30pm">6:30pm</option>';
    template += '<option value="6:45pm">6:45pm</option>';
    template += '<option value="7:00pm">7:00pm</option>';
    template += '<option value="7:15pm">7:15pm</option>';
    template += '<option value="7:30pm">7:30pm</option>';
    template += '<option value="7:45pm">7:45pm</option>';
    template += '<option value="8:00pm">8:00pm</option>';
    template += '<option value="8:15pm">8:15pm</option>';
    template += '<option value="8:30pm">8:30pm</option>';
    template += '<option value="8:45pm">8:45pm</option>';
    template += '<option value="9:00pm">9:00pm</option>';
    template += '</select>';
    template += '<select class="compact" name="date">';
    template += '<option value="0">Today</option>';
    template += '<option value="1">Tomorrow</option>';
    template += '<option value="2">In 2 days</option>';
    template += '<option value="3">In 3 days</option>';
    template += '</select>';
    template += '</fieldset>';
    template += '<input type="submit" name="route" value="Route Trip"  />';
    template += '</form>';


// compile template
var output = hogan.compile(template, {asString: true});

console.log(output);