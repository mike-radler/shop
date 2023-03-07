import React, {useContext} from 'react'
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";
import classes from "../css/style.css";

const Pages = observer(() => {
    const {device} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    if (pageCount > 1)
        return (
            <Pagination className='mt-5 justify-content-center'>
                {pages.map(page =>
                    <Pagination.Item
                        style={classes}
                        key={page}
                        active={device.page === page}
                        onClick={() => device.setPage(page)}
                    >{page}</Pagination.Item>
                )}
            </Pagination>
        );
});

export default Pages;