export default (props) => (
    <style>
	  {`
	  	.search-wrapper{
		   position: relative;
  		   display: inline-block;
	  	}
	  	.search-wrapper .icon-search{
		   position: absolute;
		   right: 10px;
		   top: 0;
		   margin-top: 30px;
		   width: 16px;
		   height: 16px;
		   font-size: 16px;
		   color: #c1cddc;
	  	}
	    .cpj-search{
	       width: 350px;
	       padding: 0 35px 0 10px;
	       height: 32px;
	       color: #71777d;
	       background-color: #f7f8fa;
	       border-radius: 5px;
	       border: 1px solid #e7eaf1;
	       box-shadow: none;
	       outline:none;
	       box-sizing: content-box;
	       transition: all 400ms;
	    }
	    input.cpj-search[type=text]:focus{
	       border: 1px solid #6CA6CD;
	       box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 6px #6CA6CD
	    }
	  `}
	</style>
)