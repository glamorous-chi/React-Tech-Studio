import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../css/About.css"

function BlogCard ({blog}) {
  return (
    <CardGroup className='high'>
      <Card>
        <Card.Img variant="top" src={blog?.imageUrl} />
        <Card.Body>
          <Card.Title>{blog?.title}</Card.Title>
          <Card.Text>
            {blog?.content}
          </Card.Text>
          <Card.Text>
            {blog?.state}
          </Card.Text>
          <Card.Text>
            {blog?.category}
          </Card.Text>
          <Card.Text>
            {blog?.author}
          </Card.Text>
          <Card.Text>
            {blog?.tags[0]}
          </Card.Text>
          <Card.Text>
            {blog?.read_time}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">{blog?.createdAt}</small>
          <small className="text-muted">{blog?.updatedAt}</small>
          <small className="text-muted">{blog?.__v}</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src={blog?.imageUrl} />
        <Card.Body>
          <Card.Title>{blog?.title}</Card.Title>
          <Card.Text>
            {blog?.content}
          </Card.Text>
          <Card.Text>
            {blog?.state}
          </Card.Text>
          <Card.Text>
            {blog?.category}
          </Card.Text>
          <Card.Text>
            {blog?.author}
          </Card.Text>
          <Card.Text>
            {blog?.tags[0]}
          </Card.Text>
          <Card.Text>
            {blog?.read_time}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">{blog?.createdAt}</small>
          <small className="text-muted">{blog?.updatedAt}</small>
          <small className="text-muted">{blog?.__v}</small>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Img variant="top" src={blog?.imageUrl} />
        <Card.Body>
          <Card.Title>{blog?.title}</Card.Title>
          <Card.Text>
            {blog?.content}
          </Card.Text>
          <Card.Text>
            {blog?.state}
          </Card.Text>
          <Card.Text>
            {blog?.category}
          </Card.Text>
          <Card.Text>
            {blog?.author}
          </Card.Text>
          <Card.Text>
            {blog?.tags[0]}
          </Card.Text>
          <Card.Text>
            {blog?.read_time}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <small className="text-muted">{blog?.createdAt}</small>
          <small className="text-muted">{blog?.updatedAt}</small>
          <small className="text-muted">{blog?.__v}</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}



export default BlogCard