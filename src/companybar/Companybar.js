import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import {setSelectedCompany} from "../reducers/productsSlice";

const Companybar = () => {
    const companies = useSelector(state => state.products.companies)
    const selectedCompany = useSelector(state => state.products.selectedCompany)
    const dispatch = useDispatch()

    return (
        <div>
            <span className="fs-4 text-white">Компании</span>
            <ListGroup>
                {companies.map(company =>
                    <ListGroupItem
                        style = {{cursor:'pointer'}}
                        active={company.id === selectedCompany.id}
                        key={company.id}
                        onClick={() => dispatch(setSelectedCompany(company))}
                    >
                        {company.name}
                    </ListGroupItem>
                )}
            </ListGroup>
        </div>

    );
};

export default Companybar;