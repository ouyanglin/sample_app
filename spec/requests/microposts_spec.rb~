require 'spec_helper'

describe "Microposts" do

  before(:each) do
    user = Factory(:user)
    visit signin_path
    fill_in :email,    :with => user.email
    fill_in :password, :with => user.password
    click_button
  end

  describe "creation" do

    describe "failure" do

      it "should not make a new micropost" do
	lambda do
	  visit root_path
	  fill_in :micropost_content, :with => ""
	  click_button
	  response.should render_template('pages/home')
	  response.should have_selector("div#error_explanation")
	end.should_not change(Micropost, :count)
      end
    end

    describe "success" do

      it "should make a new micropost" do
	content = "Lorem ipsum dolor sit amet"
	plural = /micropost\z/
	lambda do
	  visit root_path
	  fill_in :micropost_content, :with => content
	  click_button
	  response.should have_selector("span.content", :content => content)
	end.should change(Micropost, :count).by(1)
      end

      describe "sidebar counter" do

	before(:each) do
	  @content1 = "First micropost"
	  visit root_path
	  fill_in :micropost_content, :with => @content1
	  click_button
	end

	it "should have the right count 1" do
	  count = Micropost.count
	  response.should have_selector("span.microposts",
					:content => "#{count}")
	  response.should_not have_selector("span.microposts",
					    :content => "microposts")
	end

	it "should have the right count 2" do 
	  fill_in :micropost_content, :with => @content1
	  click_button
	  count = Micropost.count
	  response.should have_selector("span.microposts",
					:content => "#{count}")
	  response.should have_selector("span.microposts",
					:content => "microposts")
	end
      end
    end

    describe "micropost pagination" do

      before(:each) do
	@content_repeat = "repeat"
	visit root_path
	30.times do
	  fill_in :micropost_content, :with => @content_repeat
	  click_button
	end
      end

      it "should not have DIV.pagination" do
	response.should_not have_selector("div.pagination")
      end

      it "should have DIV.pagination" do
	visit root_path
	fill_in :micropost_content, :with => @content_repeat
	click_button
	response.should have_selector("div.pagination")
      end
    end
  end
end
