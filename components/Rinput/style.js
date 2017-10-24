export default (props) => (
    <style>
        {`
            .Rinput-wrapper{
               width:150px;
               height:45px;
            }
            .normalInput {
                width:100%;
                padding: 0 35px 0 10px;
                height: 32px;
                color: #71777d;
                background-color: #f7f8fa;
                border-radius: 5px;
                border: 1px solid #e7eaf1;
                box-shadow: none;
                outline: none;
                box-sizing: content-box;
                transition: all 400ms;
            }
            input.normalInput[type=text]:focus{
               border: 1px solid #6CA6CD;
               box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #6CA6CD
            }
        `}
    </style>
)