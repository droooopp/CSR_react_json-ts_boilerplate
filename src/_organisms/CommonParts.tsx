import { VFC, useEffect, useState, Suspense } from 'react'
import styled from 'styled-components'

import { ProductInterface } from '../_interface'
import { axiosInstance } from '../_modules'
import { CommonPartsItem } from '../_molecules'

export const CommonParts: VFC = () => {
  const commonPartsEl = document.getElementById('common_parts')
  const commonPartsId = commonPartsEl?.dataset.jsonId

  const [commonPartsData, setParts] = useState<ProductInterface>()

  const fetchPartsData = (data: ProductInterface[]) => {
    const target = data[0]

    setParts(target)
  }

  useEffect(() => {
    const fetchCommonPartsData = async (): Promise<void> => {
      try {
        const response = await axiosInstance.get(
          `/common/json/${commonPartsId}.json`
        )
        const data = response.data

        fetchPartsData(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchCommonPartsData()
  }, [])

  const Wrap = styled.div`
    display: block;
  `

  return (
    <>
      {commonPartsData && (
        <Suspense fallback={<div>Loading...</div>}>
          <Wrap>
            <CommonPartsItem bannerData={commonPartsData} />
          </Wrap>
        </Suspense>
      )}
    </>
  )
}
