import React from 'react';
import { useState } from 'react';
import style from './index.module.css';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@mui/icons-material';

export const ProfileForm = (props) => {
  const { profile, handleChange, user } = props;
  return (
    <div className={style.container}>
      <h2>Add Your Bio</h2>
      <p className={style.subheading}>we need information about you</p>

      <form className={style.form}>
        <div className={style.flexBox}>
          <label className={style.formLabel}>
            First Name
            <input
              className={style.formInput}
              type="text"
              name="name"
              value={!user.name ? 'John' : user.name}
              onChange={handleChange}
            />
          </label>
          <label className={style.formLabel}>
            Last Name
            <input
              className={style.formInput}
              type="text"
              name="name"
              value={!user.name ? 'Doe' : user.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className={style.flexBox}>
          <label className={style.formLabel}>
            Profession
            <input
              className={style.formInput}
              type="text"
              name="profession"
              value={profile.profession}
              onChange={handleChange}
            />
          </label>
          <label className={style.formLabel}>
            Position
            <input
              className={style.formInput}
              type="text"
              name="position"
              value={profile.position}
              onChange={handleChange}
            />
          </label>
        </div>
        <label className={style.formLabel}>
          Hospital
          <input
            className={style.formInput}
            type="text"
            name="hospital"
            value={profile.hospital}
            onChange={handleChange}
          />
        </label>
        <div className={style.upload}>
          <button className={style.uploadBtn}>upload</button>
          <div>
            <p className={style.uploadheading}>Upload Your Profile photo</p>
            <p className={style.uploadSubheading}>
              The file can .png .jpg .jpeg only
            </p>
          </div>
        </div>
        <button className={style.formSubmit} type="submit">
          Continue
        </button>
      </form>
    </div>
  );
};
