export default (props) => (
    <style>
	  {`
	  	.button-wrapper{
	  		display: inline-block;
	  		vertical-align: baseline;
			padding: 5px 18px;
			height: 12px;
			line-height: 12px;
			font-size: 12px;
			border-radius: 3px;
			box-sizing: content-box;
			cursor: pointer;
			transition: opacity 400ms;
		}
		a.button-primary{
			background: #fff;
			border: 1px solid #0f88eb;
			color: #0f88eb;
		}
		a.button-write{
			background: #0f88eb;
			border: 1px solid #0f88eb;
			color: #fff;
		}
		a.button-primary:hover,
		a.button-write:hover{
			opacity: 0.7;
		}
	  `}
	</style>
)