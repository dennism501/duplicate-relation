module.exports = {
    beforeCreate(event) {
      const { data, where, select, populate } = event.params; 

      //console.log("Before: ",event)
      const ctx = strapi.requestContext.get()
      console.log(ctx.state)

    },
  
    afterCreate(event) {
      const { result, params } = event; 
  
        //console.log("After: ",event)
    },
  };