# Hugging Face Trending Models Digest 2026-04-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-04-14 02:37 UTC

---

# Hugging Face Trending Models Digest

**Date:** 2026-04-14 | **Scope:** Weekly Likes Ranking

---

## 1. Today's Highlights

The week is defined by **Gemma 4 dominance** — Google's model family accounts for roughly a third of the top-30, spanning 31B, 26B, and E4B/E2B scales, with active community quantizations from Unsloth and MLX variants for Apple Silicon. The single most-liked model is **Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled** (2,620 likes), a distilled reasoning model showing strong community appetite for reasoning-capable Qwen derivatives. **Baidu's Qianfan-OCR** (1,143 likes) is a standout outside the generative mainstream, reflecting rising interest in production-ready vision-language feature extractors. On the quantization side, **Unsloth** continues to be the dominant quantization platform, with GGUF drops for nearly every major model family — GLM, MiniMax, Gemma, and Qwen — signalling a mature community fine-tuning ecosystem.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled)** | Jackrong | 2,620 | 585,351 | A 27B Qwen 3.5 derivative distilled from Claude Opus reasoning patterns, trending for delivering strong chain-of-thought performance at a community-curated scale. |
| **[zai-org/GLM-5.1](https://huggingface.co/zai-org/GLM-5.1)** | zai-org | 1,148 | 35,906 | The official GLM MoE text-generation model, trending as the flagship open-weight Chinese-language LLM with strong conversational capabilities. |
| **[MiniMaxAI/MiniMax-M2.7](https://huggingface.co/MiniMaxAI/MiniMax-M2.7)** | MiniMaxAI | 644 | 18,279 | MiniMax's latest 2.7T MoE text model, gaining traction as an alternative open-weight base model for chat and instruction-following. |
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** | google | 1,841 | 2,439,350 | Google's 31B instruction-tuned Gemma 4 model, the highest-downloaded model on the list, proving Google's strong open-weight strategy is driving massive adoption. |
| **[google/gemma-4-E2B-it](https://huggingface.co/google/gemma-4-E2B-it)** | google | 421 | 952,048 | The "E2B" any-to-any Gemma variant optimized for efficient tool-use and function calling, trending as a lighter gateway into Gemma 4's multimodal capabilities. |
| **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,120 | 905,234 | A 9B Qwen 3.5 GGUF variant stripped of content restrictions, attracting a large community of developers seeking uncensored local inference. |
| **[LilaRest/gemma-4-31B-it-NVFP4-turbo](https://huggingface.co/LilaRest/gemma-4-31B-it-NVFP4-turbo)** | LilaRest | 195 | 28,829 | A NVFP4 turbo-tuned Gemma 4 31B, demonstrating community-driven precision optimization for inference speed on NVIDIA hardware. |
| **[dealignai/Gemma-4-31B-JANG_4M-CRACK](https://huggingface.co/dealignai/Gemma-4-31B-JANG_4M-CRACK)** | dealignai | 1,025 | 107,378 | An abliterated Gemma 4 31B variant tuned with 4M additional steps, gaining attention for removing built-in behavioral constraints at the base model level. |
| **[prism-ml/Bonsai-8B-gguf](https://huggingface.co/prism-ml/Bonsai-8B-gguf)** | prism-ml | 581 | 76,787 | A 1-bit-quantized 8B model in GGUF format, notable for extreme compression enabling local deployment on consumer hardware with surprisingly coherent outputs. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** *(image-text-to-text)* | google | 1,841 | 2,439,350 | See above — also the flagship multimodal Gemma model in its image-text-to-text pipeline configuration. |
| **[openbmb/VoxCPM2](https://huggingface.co/openbmb/VoxCPM2)** | openbmb | 825 | 9,301 | A multilingual text-to-speech model, trending for open-weight TTS generation in non-English languages with a compact voxel-based architecture. |
| **[google/gemma-4-E4B-it](https://huggingface.co/google/gemma-4-E4B-it)** | google | 630 | 1,394,523 | Google's E4B any-to-any Gemma model for seamless cross-modality reasoning and generation, trending for its versatility across text, image, and tool domains. |
| **[google/gemma-4-26B-A4B-it](https://huggingface.co/google/gemma-4-26B-A4B-it)** | google | 639 | 1,913,569 | Google's 26B A4B multimodal Gemma variant, capturing a significant share of the vision-language open-weight market with strong image understanding. |
| **[netflix/void-model](https://huggingface.co/netflix/void-model)** | netflix | 795 | 0 | Netflix's CogVideoX-based video-to-video inpainting model for object removal and editing, trending for its production-grade video editing capabilities. |
| **[k2-fsa/OmniVoice](https://huggingface.co/k2-fsa/OmniVoice)** | k2-fsa | 545 | 460,224 | A zero-shot multilingual TTS and voice cloning model, trending for its remarkable voice fidelity and broad language support at 460K downloads. |
| **[tencent/HY-Embodied-0.5](https://huggingface.co/tencent/HY-Embodied-0.5)** | tencent | 168 | 642 | Tencent's Hunyuan VL-powered embodied AI model for robotics and spatial reasoning, trending as an early but promising open-weight approach to robot-world interaction. |
| **[ACE-Step/acestep-v15-xl-turbo](https://huggingface.co/ACE-Step/acestep-v15-xl-turbo)** | ACE-Step | 96 | 3,253 | A text-to-audio generation model with transformer + safetensors stack, trending in the niche audio generation space for its fast inference profile. |
| **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** | baidu | 1,143 | 56,563 | Baidu's InternVL-powered OCR and feature extraction pipeline, trending as a production-grade open-weight alternative to proprietary OCR APIs. |
| **[LiquidAI/LFM2.5-VL-450M](https://huggingface.co/LiquidAI/LFM2.5-VL-450M)** | LiquidAI | 125 | 7,523 | A 450M vision-language model from Liquid AI's LFM (Liquid Foundation Model) architecture, notable for its small footprint and non-transformer state-space design. |
| **[black-forest-labs/FLUX.2-small-decoder](https://huggingface.co/black-forest-labs/FLUX.2-small-decoder)** | black-forest-labs | 87 | 7,135 | FLUX's compact image-to-image decoder for editing tasks, trending as a lightweight community-accessible entry point into FLUX's diffusion editing ecosystem. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[baidu/Qianfan-OCR](https://huggingface.co/baidu/Qianfan-OCR)** *(feature-extraction)* | baidu | 1,143 | 56,563 | See above — re-listed for its specialized OCR/feature-extraction role. |
| **[ACE-Step/acestep-v15-xl-turbo](https://huggingface.co/ACE-Step/acestep-v15-xl-turbo)** *(feature-extraction)* | ACE-Step | 96 | 3,253 | See above — re-listed for its audio feature-extraction specialization. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
|-------|--------|-------|-----------|---------|
| **[Jackrong/Qwopus3.5-27B-v3-GGUF](https://huggingface.co/Jackrong/Qwopus3.5-27B-v3-GGUF)** | Jackrong | 294 | 126,509 | A GGUF-quantized Qwen 3.5 27B reasoning-focused model, trending as the go-to quantized option for running large reasoning workloads locally via llama.cpp. |
| **[unsloth/gemma-4-31B-it-GGUF](https://huggingface.co/unsloth/gemma-4-31B-it-GGUF)** | unsloth | 306 | 1,181,417 | Unsloth's GGUF of the 31B Gemma 4 it model, with 1.18M downloads making it one of the most downloaded quantized models on the entire list. |
| **[unsloth/gemma-4-E4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-E4B-it-GGUF)** | unsloth | 252 | 1,100,025 | Unsloth's quantized E4B variant, trending for bringing Gemma 4's any-to-any capabilities to consumer GPU setups with llama.cpp compatibility. |
| **[unsloth/gemma-4-26B-A4B-it-GGUF](https://huggingface.co/unsloth/gemma-4-26B-A4B-it-GGUF)** | unsloth | 458 | 1,803,416 | The highest-downloaded GGUF model on this list (1.8M DLs), Unsloth's 26B A4B Gemma quant, serving as the community's primary on-disk route for Gemma 4 vision models. |
| **[unsloth/GLM-5.1-GGUF](https://huggingface.co/unsloth/GLM-5.1-GGUF)** | unsloth | 136 | 28,533 | Unsloth's GGUF port of GLM 5.1 MoE, enabling local deployment of the Chinese flagship model via llama.cpp with manageable resource requirements. |
| **[unsloth/MiniMax-M2.7-GGUF](https://huggingface.co/unsloth/MiniMax-M2.7-GGUF)** | unsloth | 93 | 23,720 | Quantized MiniMax M2.7 for local inference, trending as Unsloth extends its quantization pipeline to newer non-English base model families. |
| **[HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Gemma-4-E4B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 293 | 486,019 | A GGUF uncensored Gemma 4 E4B variant with aggressive tone settings, attracting 486K downloads from developers seeking unfiltered local Gemma deployments. |
| **[Jiunsong/supergemma4-26b-uncensored-gguf-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-gguf-v2)** | Jiunsong | 149 | 7,307 | A fast GGUF Supercell Gemma 4 26B uncensored build via llama.cpp, noteworthy for its lean fast-deployment profile. |
| **[Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2](https://huggingface.co/Jiunsong/supergemma4-26b-uncensored-mlx-4bit-v2)** | Jiunsong | 89 | 2,284 | An MLX 4-bit quantized Gemma 4 uncensored model for Apple Silicon, trending among the Mac-focused ML community for efficient local inference. |
| **[nvidia/Gemma-4-31B-IT-NVFP4](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4)** | nvidia | 372 | 757,154 | NVIDIA's ModelOpt/NVFP4-tuned Gemma 4 31B, showcasing vendor-optimized precision training for NVIDIA hardware — the most downloaded non-GGUF quantized variant. |
| **[HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.5-9B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 1,120 | 905,234 | See above — re-listed as a dominant community fine-tune. |
| **[LGAI-EXAONE/EXAONE-4.5-33B](https://huggingface.co/LGAI-EXAONE/EXAONE-4.5-33B)** | LGAI-EXAONE | 130 | 4,148 | LG AI's EXAONE 4.5 33B model, a Korean AI Lab flagship showing a new entrant in the open-weight multilingual LLM race beyond US

---
*This digest is auto-generated by [agents-radar](https://github.com/manelsen/agents-radar).*