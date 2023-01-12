import { useDispatch, useSelector } from "react-redux"
import { uiActions } from "../../store/uiSlice"
import classes from "./CartButton.module.css"

const CartButton = (props) => {
	const dispatch = useDispatch()

	const cartQuantity = useSelector((state) => state.cart.totalQuantity)

	const toggleCartBtn = () => {
		dispatch(uiActions.toggle())
	}

	return (
		<button className={classes.button} onClick={toggleCartBtn}>
			<span>My Cart</span>
			<span className={classes.badge}>{cartQuantity}</span>
		</button>
	)
}

export default CartButton
