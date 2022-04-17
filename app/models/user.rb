# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string
#
class User < ApplicationRecord
  validates :password_digest, :session_token, presence: true
  validates :username, :email, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validate :email_format, on: [:create, :update]

  has_many :artworks,
    primary_key: :id,
    foreign_key: :artist_id,
    class_name: :Product

  has_many :comments,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Comment

  has_many :carts,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Cart

  after_initialize :ensure_session_token

  attr_reader :password

  def email_format
    if User.invalid_email_format?(self.email)
      errors.add(:email, 'format invalid')
    end
  end

  def self.invalid_email_format?(email)
    at_count = 0

    email.each_char do |char|
      at_count += 1 if char == '@'
      return false if (char == '.' && at_count == 1)
    end

    return true
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

end
