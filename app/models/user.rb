class User < ApplicationRecord 
  validates :password_digest, :session_token, presence: true
  validates :username, presence: true, uniqueness: true 
  validates :password, length: {minimum: 6, allow_nil: true}

  # has_many :artworks
  #   primary_key: :id,
  #   foreign_key: :artist_id,
  #   class_name: :Product

  # belongs_to :cart
  #   primary_key: :id,
  #   foreign_key: :user_id,
  #   class_name: :Cart 

  after_initialize :ensure_session_token

  attr_reader :password 

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
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
    self.session_token ||= SecureRandom.urlsafe.base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe.base64
    self.save
    self.session_token
  end

end