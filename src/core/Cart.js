import React, {useState, useEffect} from 'react';
import Layout from './Layout';
import {Link, Redirect} from 'react-router-dom'
import {getCart, removeItem} from './cartHelpers';
import Card from './Card';
import Checkout from './Checkout';

const Cart = () => {
    const [items, setItems] = useState([]);
    const [run, setRun] = useState(false);



    useEffect(() => {
        setItems(getCart())
    }, [run]);

    const showItems = items => {
        return (
            <div className="">
                <h2>Your cart has {`${items.length}`}
                    items</h2>
                <hr/> {items.map((product, i) => (<Card key={i} product={product} showAddToCartButton={false} cardUpdate={true} showRemoveProductButton={true} setRun={setRun}
            run={run}/>))}
            </div>
        )
    }

    const noItemsMessage = () => (
        <h2>Your cart is empty.
            <br/>
            <Link to="/shop">Continue shopping</Link>
        </h2>
    )

    return (
        <Layout
            title="Shopping Cart"
            description="Manage your items. Add or remove checkout or continue shopping"
            className="container-fluid">

            <div className="row">
                <div className="col-6">
                    {items.length > 0
                        ? showItems(items)
                        : noItemsMessage()}
                </div>

                <div className="col-6">
                    <h2 className="mb-4">
                        Your Cart Summary
                    </h2>
                    <hr/>
                    <Checkout products={items}/>
                </div>
            </div>

        </Layout>
    );
}

export default Cart;