import  React  from  'react';

const  DisplayQuote = ({ quote }) => {
    return (
        <div  className="DisplayQuote">
			{quote.map(
				(element, i) =>
					<div key={i}>
						<p>Quote : {element.quote}</p>
						<p>Name : {element.character}</p>
						<img src={element.image} alt="img"></img>
					</div>
			)}
        </div>
    );
};

export  default  DisplayQuote;