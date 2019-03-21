import React from 'react';

const Card = ({name, email, id }) =>{
	return (
	<div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
        <img alt='robots' src={require(`../Images/${id}.jpg`)} width="250px" height="250px"/>
		<div>
		<h2>{name}</h2>
		<input type="text" name="rank" class="field left" length="1"></input>
		</div>
	</div>
  );
}
			
			//<img alt='robots' src={`./images/${id}.jpg`}/>
			//<img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
			//<img alt='robots'src={'../images/{$}id'}/>
			//c:/users/dell owner/desktop/robofriends/src/images/1.jpg
export default Card; 