import { useAppDispatch } from "@/modules/hooks";
import { setToast } from "@/modules/reducers/mask/slice";
import { IconBrandGithub } from "@tabler/icons";
import React, { memo, useCallback, useState } from "react";
import { useRef } from "react";
import { useSpeech } from "react-use";

const voices = window.speechSynthesis.getVoices();

const Demo = () => {
  const state = useSpeech("Hello world!", {
    rate: 0.8,
    pitch: 0.5,
    voice: voices[0],
  });

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};

const Speech = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const active = useRef(false);
  const [_active, setActive] = useState(false);

  const createRecognition = () => {
    const grammar =
      "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";

    const recognition = new webkitSpeechRecognition();
    const speechRecognitionList = new webkitSpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    //recognition.continuous = false;
    // recognition.interimResults = false;
    recognition.continuous = true;
    recognition.interimResults = true;
    // recognition.lang = 'en-US';
    recognition.lang = "cmn-Hans-CN";
    recognition.maxAlternatives = 1;

    recognition.onresult = function (event) {
      console.log("result");
      console.log(event);
      let text = "";
      for (const [{ transcript }] of event.results) {
        text += transcript;
      }
      // const color = event.results[0][0].transcript;
      setText(text);
    };

    recognition.onstart = (e) => {
      console.log(e, "start");
    };

    recognition.onend = (e) => {
      console.log(e, "end");
      active.current = false;
      setActive(false);
    };

    recognition.onspeechstart = (e) => {
      console.log(e, "speechstart");
    };

    recognition.onspeechend = (e) => {
      console.log(e, "speechend");
    };

    recognition.onsoundstart = (e) => {
      console.log(e, "soundstart");
    };

    recognition.onsoundend = (e) => {
      console.log(e, "soundend");
    };

    recognition.onaudiostart = (e) => {
      console.log(e, "audiostart");
    };

    recognition.onaudioend = (e) => {
      console.log(e, "audioend");
    };
    return recognition;
  };
  const { current: recognition } = useRef(createRecognition());

  const message = `在最新浏览器下使用`;
  const handleStart = useCallback(() => {
    if (!("speechSynthesis" in globalThis)) {
      return dispatch(setToast(message));
    }

    if (active.current) {
      // 终止会卡死一会
      console.log("toggleEnd");
      active.current = false;
      setActive(false);
      recognition.abort();

      return;
    } else {
      active.current = true;
      setActive(true);
      console.log("start");
      recognition.start();
      console.log("Ready to receive a color command.");
    }
  }, []);

  return (
    <div className="absolute bottom-0 left-0">
      {_active && <textarea value={text} readOnly />}
      <div>
        {_active &&
          `(真人讲话的效果较好，但是放歌给电脑听电脑听清，所以可以选择自己唱歌给电脑听，中途关闭会小卡)`}
      </div>
      <button
        type="button"
        title={message}
        onClick={handleStart}
        className="border px-2 flex-center hover:bg-black hover:text-white"
      >
        <IconBrandGithub />
        {_active ? "正在收集声音" : "隐藏功能"}
      </button>
    </div>
  );
};

export default memo(Speech);
