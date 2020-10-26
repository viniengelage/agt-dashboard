import React from 'react'

import ClipLoader from "react-spinners/ClipLoader";
import { Mask, Spinner } from './styles';

const Loading = ({ loading }) => {
    return loading ? (
        <Mask>
            <Spinner>
                <ClipLoader
                    //   css={override}
                    size={150}
                    loading={loading}
                />
            </Spinner>
        </Mask>
    ) : null
}

export default Loading