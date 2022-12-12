function expressionPanel(thisObj) {
    var win = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Expression Script", undefined);        
    win.spacing = 5;
    
    var groupOne = win.add("group", undefined, "GroupTwo");        
    groupOne.orientation = "column";        
    expressionInput = groupOne.add("edittext", undefined, "loopOut();");        
    expressionInput.characters = 25;        
    
    var groupTwo = win.add("group", undefined, "GroupOne");        
    groupTwo.orientation = "column";        
    applyBtn = groupTwo.add("button", undefined, "Apply");        
    
    applyBtn.onClick = function(){            
        addExpression();        
    };        
    
    win.onResizing = win.onResize = function() {            
        this.layout.resize();        
    };        
    
    win instanceof Window            
        ? (win.center(), win.show()) : (win.layout.layout(true), win.layout.resize());    
    }