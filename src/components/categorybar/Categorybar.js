import {ListGroup, ListGroupItem} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedCategory} from "../../reducers/productsSlice";
import {useNavigate, useSearchParams} from "react-router-dom";
import {SHOP_ROUTE} from "../../utils/consts";

const Categorybar = () => {
    const categories = useSelector(state => state.product.categories)
    const selectedCategory = useSelector(state => state.product.selectedCategory)
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const categoryParamChange = ((category) => {
        if (selectedCategory.id === category.id) {
            searchParams.delete('categoryID')
        } else {
            searchParams.set('categoryID', category.id)
        }
        navigate({
            pathname: SHOP_ROUTE,
            search: searchParams.toString()
        })
    })

    return (
        <div>
            <span className="fs-4 text-white">Категории</span>
            <ListGroup>
                {categories.map(category =>
                    <ListGroupItem
                        style={{cursor: 'pointer'}}
                        active={category.id === selectedCategory.id}
                        key={category.id}
                        onClick={() => {
                            dispatch(setSelectedCategory(category))
                            categoryParamChange(category)
                        }
                    }
                    >
                        {category.name}
                    </ListGroupItem>
                )}
            </ListGroup>
        </div>
    );
};

export default Categorybar;