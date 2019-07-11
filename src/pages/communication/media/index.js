import React from 'react'

import { ic_attach_file as FileIcon } from 'react-icons-kit/md/ic_attach_file'

import Icon from 'components/icon'
import Pagination from 'layouts/main/components/pagination'
import { getImageURL } from 'utils'

export default () => (
  <Pagination
    apiEntrypoint='/public/medias'
    render={(item, index, arr) => (
      <React.Fragment key={item.id}>
        <h3>{item.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: item.descriptionHtml }} />
        {item.file && (
          <div>
            <Icon icon={FileIcon} />
            <a
              download
              href={getImageURL(item.file)}
              rel='noopener noreferrer'
              target='_blank'
            >
              {item.extraFileText}
            </a>
          </div>
        )}
        {(index + 1) < arr.length && <hr />}
      </React.Fragment>
    )}
  />
)
