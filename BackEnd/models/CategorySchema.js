const mongoose = require("mongoose");


const CategorySchema = mongoose.Schema({
    name:{type:String, required:true},
      images:[{type:String, required:true}],
        color:{type:String, required:true},
})

//  To convert id into_id for easy deletion

CategorySchema.virtual('id').get(function(){
  return this._id.toHexString();
})
CategorySchema.set('toJSON',{
  virtuals: true,
})
exports.Category = mongoose.model("Category Schema",CategorySchema);
exports.CategorySchema = CategorySchema;