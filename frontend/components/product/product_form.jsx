import React from 'react';

class ProductForm extends React.Component {

    constructor(props){
        super(props);
    }

    render () {
        return (
            <form>
                <h1>Add a New Listing</h1>
                <h2>Photos</h2>

                <h2>Listing details</h2>
                <label> Title
                    <input type="text" />
                </label>

                <label> Category 
                    <input type="text" />
                </label>

                <label> Materials 
                    <input type="text" />
                </label>

                <h2>Inventory and Pricing</h2>

                <label> Price 
                    <input type="text" />
                </label>
            </form>
        )
    }
    
}

export default ProductForm;