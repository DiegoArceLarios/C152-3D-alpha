AFRAME.registerComponent("impulsion",{
    schema:{
        moveY: {type: "number", default: 1}
    }, tick: function(){
        var pos = this.el.getAttribute("position");
        pos.y += 0.01
        this.el.setAttribute("position",{x:pos.x, y: pos.y, z: pos.z});
    }
})