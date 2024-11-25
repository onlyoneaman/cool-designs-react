import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

const TagSelector = () => {
  const [selectedTags, setSelectedTags] = useState(["Personal", "Meetings", "Ideas"]);

  const recentTags = [
    { id: "personal", label: "Personal" },
    { id: "inspiration", label: "Inspiration" },
    { id: "ideas", label: "Ideas" },
    { id: "todo", label: "To-Do" },
    { id: "meetings", label: "Meetings" },
    { id: "study", label: "Study" },
  ];

  const toggleTag = (tagLabel) => {
    if (selectedTags.includes(tagLabel)) {
      setSelectedTags(selectedTags.filter((tag) => tag !== tagLabel));
    } else {
      setSelectedTags([...selectedTags, tagLabel]);
    }
  };

  return (
    <Card className="w-full max-w-md bg-white shadow-lg rounded-lg">
      <CardContent className="pt-4">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Add Tags</h3>

          <Input
            placeholder="Add tags"
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-shadow"
          />

          <div className="space-y-2">
            <p className="text-sm text-gray-500">Recently created</p>

            <div className="flex flex-wrap gap-2">
              {recentTags.map((tag) => (
                <Button
                  key={tag.id}
                  variant="outline"
                  className={`
                    rounded-full px-4 py-1 h-8 transition-all duration-300 
                    transform hover:scale-105 active:scale-95
                    flex items-center gap-2
                    ${selectedTags.includes(tag.label)
                    ? "border-2 border-green-500 bg-green-100 text-green-700 shadow-sm"
                    : "border-gray-200 bg-gray-50 text-gray-700"}
                  `}
                  onClick={() => toggleTag(tag.label)}
                >
                  {/* Placeholder for checkmark space */}
                  <span
                    className={`inline-block w-4 h-4 transition-transform duration-300 ${
                      selectedTags.includes(tag.label)
                        ? "translate-x-0 opacity-100"
                        : "hidden -translate-x-4 opacity-0"
                    }`}
                  >
                    <Check className="w-4 h-4 text-green-500" />
                  </span>
                  <span className="whitespace-nowrap">{tag.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <Button
            className="w-full bg-black text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-transform duration-300 active:scale-95"
          >
            <Check className="w-4 h-4 mr-2" /> Done
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TagSelector;
