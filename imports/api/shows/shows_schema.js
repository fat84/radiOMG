import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { orion } from 'meteor/orionjs:core';
import { Meteor } from 'meteor/meteor';

export const ShowsSchema = new SimpleSchema({
	showName: {
		type: String,
		label: "Show Name",
		optional: false
	},
	userId: {
    type: String,
    autoform: {
			type: 'hidden',
			label: false
		},
		autoValue: function() {
			if (!this.isSet) return this.userId;
		}
  },
  author: {
    type: String,
    autoform: {
			type: 'hidden',
			label: false
		},
		autoValue: function() {
			if (!this.isSet) return Meteor.user().username;
		}
  },
	startDay: {
		type: String,
		label: "Start Day",
		allowedValues: ['sunday', 'monday', 'tuesday', 'wednesday','thursday','friday','saturday'],
		autoform: {
			options: [
				{label: "Sunday", value: 'sunday'},
				{label: "Monday", value: 'monday'},
				{label: "Tuesday", value: 'Tuesday'},
				{label: "Wednesday", value: 'Wednesday'},
				{label: "Thursday", value: 'thursday'},
				{label: "Friday", value: 'friday'},
				{label: "Saturday", value: 'saturday'}
			]
		},
		optional: false
	},
	startHour: {
		type: Number,
		label: "Start Hour",
		min: 0,
		max: 23
	},
	startMinute: {
		type: Number,
		label: "Start Minute",
		min: 0,
		max: 59
	},
	endDay: {
		type: String,
		label: "End Day",
		allowedValues: ['sunday', 'monday', 'tuesday', 'wednesday','thursday','friday','saturday'],
		autoform: {
			options: [
				{label: "Sunday", value: 'sunday'},
				{label: "Monday", value: 'monday'},
				{label: "Tuesday", value: 'Tuesday'},
				{label: "Wednesday", value: 'Wednesday'},
				{label: "Thursday", value: 'thursday'},
				{label: "Friday", value: 'friday'},
				{label: "Saturday", value: 'saturday'}
			]
		},
		optional: false
	},
	endHour: {
		type: Number,
		label: "End Hour",
		min: 0,
		max: 23
	},
	endMinute: {
		type: Number,
		label: "End Minute",
		min: 0,
		max: 59
	},
	genres: {
		type: [String],
		optional: false
	},
	body: orion.attribute('summernote', {
		type: String,
		label: 'Body',
		optional: false
	}),
	slug: {
		type: String,
		autoform: {
			type: 'hidden',
			label: false
		}
	},
	commentCount: {
		type: Number,
		label: 'Comment Count',
		defaultValue: 0
	},
	featuredImage: orion.attribute('image', {
		label: 'Featured Image',
		optional: true
	}),
	submitted: {
		type: Date,
		autoform: {
			type: 'hidden',
			label: false
		},
		defaultValue: new Date()
	}
});
