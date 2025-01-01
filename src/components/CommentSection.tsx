'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';


interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [form, setForm] = useState({ author: '', text: '' });
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSaveComment = () => {
    if (!form.text.trim() || !form.author.trim()) {
      alert('Please fill in both your name and a comment.');
      return;
    }

    if (editingCommentId) {
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === editingCommentId
            ? { ...comment, author: form.author, text: form.text }
            : comment
        )
      );
      setEditingCommentId(null);
    } else {
      const newComment: Comment = {
        id: new Date().toISOString(),
        author: form.author,
        text: form.text,
      };
      setComments((prev) => [...prev, newComment]);
    }

    setForm({ author: '', text: '' });
  };

  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setForm({ author: commentToEdit.author, text: commentToEdit.text });
      setEditingCommentId(commentId);
    }
  };

  const handleDeleteComment = (commentId: string) => {
    setComments((prev) => prev.filter((comment) => comment.id !== commentId));
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold">Comments</h2>

      <div className="mt-4 space-y-4">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className="font-semibold">{comment.author}</div>
                <p>{comment.text}</p>
                <div className="flex space-x-4 mt-2">
                  <Button
                    onClick={() => handleEditComment(comment.id)}
                    className="text-blue-500"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDeleteComment(comment.id)}
                    className="text-purple-500"
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-slate-400">No comments yet</p>
        )}
      </div>

      <div className="mt-6">
        <Input
          name="author"
          type="text"
          value={form.author}
          onChange={handleInputChange}
          placeholder="Your name"
          className="w-full mb-2"
          aria-label="Author name"
        />
        <Input
          name="text"
          type="text"
          value={form.text}
          onChange={handleInputChange}
          placeholder="Add a comment"
          className="w-full mb-2"
          aria-label="Comment text"
        />
        <Button
          onClick={handleSaveComment}
          className="mt-4"
          disabled={!form.text.trim() || !form.author.trim()}
        >
          {editingCommentId ? 'Save' : 'Submit'}
        </Button>
      </div>
    </div>
  );
}
