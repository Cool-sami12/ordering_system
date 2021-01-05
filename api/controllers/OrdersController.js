/**
 * OrdersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
//   getOrders: function(req,res){
//     return res.json({ orders: User.getRandomOne()});

  //   },
  //   getProtectedOrders: function(req,res){
  //     return res.json({ orders: User.getRandomOne()});

  //   },
  getOrder:function(req,res){
    Orders.find({}).exec((err, orders) => {
      if(err){
        res.send(500,{error: 'Database Error'});

      }
      res.status(200, {orders:orders});

    });


  },
  //   add: function(req,res){
  //     res.status(200, {message:'Order created successfully '});
  //   },
  Create:function(req,res){
    const customername = req.body.customername;
    const productname = req.body.productname;
    const quantity = req.body.quantity;
    Orders.create({ customername:customername, productname:productname, quantity:quantity}).exec((err) => {
      if(err){
        res.send(500,{error: 'Database Error'});
      }

      return res.status(200, {message:'Order created successfully '});
    });
  },
  Delete: function(req, res){
    Orders.destroy({ id: req.params.id}).exec((err) => {
      if(err){
        res.send(500,{error: 'Database Error'});
      }

      return res.status(200, {message:'Order deleted successfully '});
    });

  },
  Edit: function(req,res){
    Orders.findOne({id:req.params.id}).exec((err, order) => {
      if(err){
        res.send(500,{error: 'Database Error'});
      }

      return res.status(200, {message:'Order edited successfully '});

    });
  },
  Update:function(req,res){
    Orders.update({id: req.params.id, orderingstatus:'received'}).exec((err) => {
      if(err){
        res.send(500,{error: 'Database Error'});
      }

      return res.status(200, {message:'Order Updated successfully '});
    });

  }



};

