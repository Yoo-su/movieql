const Yoosu={
    name:"Yoosuhyun",
    age:25
}

const resolvers={
   Query:{
       person: function() {
           return Yoosu;
       }
   }
};

export default resolvers;