import React from 'react'

const List = React.memo(({data, handleClick, eventText, titleOnly}) =>
	titleOnly ? (
		data.map( item => (
				<li key = { item.id }>
					{ item.title }
				</li>
			)
		)) : (

		data.map( item => (
				<figure key = { item.id }>
					<img src={ item.img } />
					<a onClick={()=>handleClick(item)}>
						{ eventText }
					</a>
				</figure>
			)
		)

	)
)

export default List