for (let nstr = 1; nstr<9; nstr++){
    let chessBoard = "";
    let space111 = " ";
    let newstr1 = "\n";
    let hashtag1 = "#";
    if(nstr%2!=0){
    for (let nel = 1; nel <9; nel++){
        if (nel%2!=0){
            chessBoard = chessBoard + space111;

        }
        else{chessBoard= chessBoard + hashtag1}
        
        }
        chessBoard= chessBoard + newstr1;
    }
    else{
        for (let nel2 = 1; nel2 <9; nel2++){
            if (nel2%2!=0){
                chessBoard= chessBoard + hashtag1;

            }
            else{chessBoard= chessBoard + space111}
            
            }
            chessBoard= chessBoard + newstr1;
        } 
        console.log(chessBoard);  
    }
    
    

