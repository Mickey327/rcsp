import {ListGroup, ListGroupItem} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedCategory} from "../../reducers/productsSlice";

const Typebar = () => {
    const categories = useSelector(state => state.products.categories)
    const selectedCategory = useSelector(state => state.products.selectedCategory)
    const dispatch = useDispatch()

    return (
        <div>
            <span className="fs-4 text-white">Категории</span>
            <ListGroup>
                {categories.map(category =>
                    <ListGroupItem
                        style={{cursor: 'pointer'}}
                        active={category.id === selectedCategory.id}
                        key={category.id}
                        onClick={() => dispatch(setSelectedCategory(category))}
                    >
                        {category.name}
                    </ListGroupItem>
                )}
            </ListGroup>
        </div>
    );
};

export default Typebar;