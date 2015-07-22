var tagFields= {
	name: {
		type: String,
		label: 'name'
	},
	_id: {
		type: String,
		optional: true
	},
	userId: {
		type: String,
		optional: true
	},
	bulletinId: {
		type: String
	},
	createdAt: {
		type: Date,
		optional: true
	}
}

TagsSchema= new SimpleSchema(tagFields);