import ReactDOM from 'react-dom'
import { CommonParts } from './_organisms/CommonParts'

const commonPartsEl = document.getElementById('common_parts')

commonPartsEl && ReactDOM.render(<CommonParts />, commonPartsEl)
