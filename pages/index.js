import { Configuration, OpenAIApi } from 'openai';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

import InlineEdit from '@/components/global/InlineEdit';
import Editor from '@/components/builder/Editor';
import WelcomeFooter from '@/components/builder/WelcomeFooter';
import LoadingIcon from '@/components/global/LoadingIcon';
import WelcomeModal from '@/components/global/WelcomeModal';

const saveIcon = '../../../images/save-icon.svg';
const logo = '../../../images/Compo---Logo.svg';

const SingleProjectPage = () => {
  const [editor, setEditor] = useState('');
  const [currentTitle, setCurrentTitle] = useState('Untitled');
  const [promptText, setPromptText] = useState('');
  const [showFooter, setShowFooter] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const apikey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

  useEffect(() => {
    const hasVisitedBefore = Cookies.get('hasVisitedBuilderBefore');
    if (!hasVisitedBefore) {
      Cookies.set('hasVisitedBuilderBefore', 'true');
      setShowFooter(true);
      setShowWelcome(true);
    }
  }, []);

  const handleUpdateTitle = (newTitle) => {
    setCurrentTitle(newTitle);
  };

  async function fetchOpenAI(promptText, params = {}) {
    const DEFAULT_PARAMS = {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: `${promptText}` }],
      temperature: 0,
    };
    const params_ = { ...DEFAULT_PARAMS, ...params };
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + apikey,
      },
      body: JSON.stringify(params_),
    });
    const json = await response.json();
    const htmlJson = json.choices[0].message.content;
    return htmlJson;
  }

  const fetchPromptData = async (e, promptText) => {
    setIsLoading(true);
    let htmlWithCss = editor.runCommand('gjs-get-inlined-html');
    e.preventDefault();
    const htmlResponse = await fetchOpenAI(promptText);
    editor.setComponents(htmlResponse);
    setPromptText('');
    setIsLoading(false);
  };

  function handleSave() {
    return toast('your save was successful');
  }

  return (
    <>
      <Head>
        <title>{currentTitle}</title>
        <meta
          property='og:project'
          content='editing project'
          key='single project page'
        />
        <script src='https://unpkg.com/grapesjs'></script>
        <script src='https://unpkg.com/@silexlabs/grapesjs-symbols'></script>
      </Head>
      {showWelcome && (
        <WelcomeModal
          fetchPromptData={fetchPromptData}
          setShowWelcome={setShowWelcome}
        />
      )}
      <div className='justify-start px-6 flex bg-black text-white items-center'>
        <div className='dashabord-logo w-nav-brand pr-8'>
          <img src={logo} width='90' alt='' className='logo' />
        </div>
        <div className='text-xs'>
          <InlineEdit value={currentTitle} setValue={handleUpdateTitle} />
        </div>
        <div className='w-3/6'>
          <form
            style={{ display: 'flex' }}
            onSubmit={(e) => fetchPromptData(e, promptText)}
          >
            <input
              type='text'
              value={promptText}
              placeholder='Write something like, "Make a hero section for e-commerce"...'
              className='ai-prompt-input'
              onChange={(e) => setPromptText(e.target.value)}
            />
            {isLoading && <LoadingIcon />}
          </form>
        </div>
        <div className='flex'>
          <a
            style={{ cursor: 'pointer', marginLeft: '1rem' }}
            onClick={handleSave}
          >
            <img src={saveIcon} />
          </a>
          <ToastContainer />
        </div>
      </div>
      <Editor handleSetEditor={setEditor} />
      {showFooter && <WelcomeFooter />}
    </>
  );
};

export default SingleProjectPage;
