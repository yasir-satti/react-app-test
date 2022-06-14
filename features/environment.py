from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.firefox import GeckoDriverManager

from features.pageobjects.Page import Page


def before_all(context):

    # userdata = context.config.userdata
    userdata = {
        'browser': 'chrome',
        'url': 'http://localhost:3000'
    }

    if userdata['browser'] == "chrome":
        options = webdriver.ChromeOptions()
        options.add_argument('--ignore-ssl-errors=yes')
        options.add_argument('--ignore-certificate-errors')
        context.driver = webdriver.Chrome(options=options, executable_path=ChromeDriverManager().install())
    if userdata['browser'] == "firefox":
        context.driver = webdriver.Firefox(executable_path=GeckoDriverManager().install())

    context.url = userdata['url']
    context.page = Page(context.driver)


def after_all(context):
    context.driver.quit()
