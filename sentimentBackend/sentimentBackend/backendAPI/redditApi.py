from IPython import display
import math
from pprint import pprint
import pandas as pd
import numpy as np
import nltk
import matplotlib.pyplot as plt
import seaborn as sns
sns.set(style='darkgrid', context='talk', palette='Dark2')
import praw
from praw.models import MoreComments
import spacy
from nltk.sentiment.vader import SentimentIntensityAnalyzer as SIA
spacy.prefer_gpu()

reddit = praw.Reddit(client_id='sRUAAFcF92SAOAcApXtOgA',
                     client_secret='NWHiWc_yM5fCscnAdtDq7HlQKf8U5Q',
                     user_agent='tomtom2352')


def test():
    def removeWhiteSpace(word):
        return word.strip()

    for submission in reddit.subreddit('LivestreamFail').hot(limit=25):
        splitText = submission.link_flair_text.split(":")
        splitText = splitText[len(splitText)-1].split("|")[0].strip()

    sia = SIA()
    results = []

    line = "I don't see dean on my screen this whole convo was hilarious"
    pol_score = sia.polarity_scores(line)
    pol_score['headline'] = line
    results.append(pol_score)

    pprint(results[:5], width=100)

    sent_text = nltk.sent_tokenize("This is so hilarious I went to see them get into a petty war. After seeing XQC do GTA RP I don't think anybody could be pettier than him")
    print(sent_text)
    return results[:5], sent_text