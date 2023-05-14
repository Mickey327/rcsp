import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {setSelectedCompany} from "../../reducers/productsSlice";
import {SHOP_ROUTE} from "../../utils/consts";
import {useNavigate, useSearchParams} from "react-router-dom";

const Companybar = () => {
    const companies = useSelector(state => state.product.companies)
    const selectedCompany = useSelector(state => state.product.selectedCompany)
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const companyParamChange = ((company) => {
        if (selectedCompany.id === company.id) {
            searchParams.delete('companyID')
        } else {
            searchParams.set('companyID', company.id)
        }
        navigate({
            pathname: SHOP_ROUTE,
            search: searchParams.toString()
        })
    })

    return (
        <div>
            <span className="fs-4 text-white">Компании</span>
            <ListGroup>
                {companies.map(company =>
                    <ListGroupItem
                        style = {{cursor:'pointer'}}
                        active={company.id === selectedCompany.id}
                        key={company.id}
                        onClick={() => {
                            dispatch(setSelectedCompany(company))
                            companyParamChange(company)
                        }}
                    >
                        {company.name}
                    </ListGroupItem>
                )}
            </ListGroup>
        </div>

    );
};

export default Companybar;